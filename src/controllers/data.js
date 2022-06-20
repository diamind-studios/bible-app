const {buildQuery, joinVerses, joinWords, displayTag, buildWordBox, parseSearchQuery, display} = require('./helper')
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./src/bible.db');

const getBook = async (searchText) => {
  const searchPayload = await parseSearchQuery(searchText)
  const query = `select 
    name
  from books b 
  where b.name like '${searchPayload.book}%'
  limit 1
  ;`
  db.all(query, async (err, rows) => {
    if (rows.length < 1) return
    searchPayload.book = rows[0].name
    for (element of document.getElementById('tabs').children) {
      getTextInfo(element.id, searchPayload)
    }
    display('bible-header',`${searchPayload.book} ${searchPayload.chapter}`)
  });
}

const getTextInfo = async (id, searchPayload) => {
  let payload = {searchPayload}
  //!payload.id = id
  const tabBody = document.getElementById(id)
  const title = tabBody.getElementsByClassName('topbar-icon')[0]
  payload.typeId = title.getAttribute('value')//document get chosen translation
  payload.type = title.getAttribute('type')
  payload.textName = title.innerText
  const queries = {
    'translation': `select 
      full_name, 
      license
    from translations t
    where id = ${payload.typeId};`,
    'source': `select 
      full_name,
      'Public Domain' as license
    from sources s 
    where s.id = ${payload.typeId};`
  }
  db.all(queries[payload.type], async (err, rows) => {
    payload.fullTextName = rows[0].full_name
    payload.license = rows[0].license||'N/A'
    getText(id, payload)
  });
}

const getText = async (id, payload) => {
  joinFunc = {
    "translation": joinVerses,
    "source": joinWords
  }
  const query = await buildQuery(payload)
  console.log(query)
  db.all(query, async (err, rows) => {
    const output = await document.getElementById(id).getElementsByClassName('scripture-text')[0]
    const tab = await joinFunc[payload.type](rows)
    //!no longer needed const fontSize = Number(document.getElementById('font-size').innerText)
    //! tab.style.fontSize = fontSize+'pt'
    output.innerHTML = tab
    output.innerHTML += `<label class="font-bold">${payload.fullTextName.toUpperCase()}</label><p>LICENSE: <i class="text-orange-400">${payload.license||'Public Domain'}</i></p>`
    //await displayTag('tab'+id, output)
    
    for (word of document.getElementById(id).getElementsByClassName('word')) {
      word.addEventListener('click', (event) => {
        //create display box. Then call getWordDetails and pass id of popup box
        //console.log(event.target.getAttribute('value')) 
        getWordDetails(event.target)
      })
    }
  });
}

const getVersions = async (tabId,selected='2translation') => { // selected param should be an id+source type 
  const query = `select name, id, 'source' as type from sources s where complete
  union select name, id, 'translation' as type from translations t where complete
  order by type desc, id;`
  getBook('')
  await db.all(query, async (err, rows) => {
    var output = ''
    for (row of rows) {
      if (row.id == 1) output+= `<optgroup label="${row.type[0].toUpperCase()+row.type.slice(1)}:">`
      output += `<option value="${row.id}" type="${row.type}" ${row.id+row.type == selected ? 'selected' : ''}>${row.name}</option>`
    }
    display(tabId, output)
  });
}

const getWordDetails = async (wordElm) => {
  const pKey = wordElm.getAttribute('value')
  const na = 'N/A'
  const query = `select 
      c.*,
      p.title,
      p.description
    from source_text t
    inner join concordance c
      on c.id = t.concordance_id
    inner join parsing p
      on p.id = t.parsing
    where t.source_id||'|'||t.word_number||'|'||t.book||'|'||t.chapter||'|'||t.verse = '${pKey}'`

  await db.all(query, async (err, rows) => {
    if (err) {console.error(err)}
    const wordBox = await buildWordBox(rows[0])
    document.getElementById('popup-box').innerHTML = wordBox
  })
}

module.exports = {
  'getBook': getBook,
  'getVersions': getVersions
}