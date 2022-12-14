const data = [
    {
      name: 'João',
      id: '1'
    },
    {
      name: 'Manuel',
      id: '2'
    },
    {
      name: 'Pedro',
      id: '3'
    },
    {
      name: 'José',
      id: '4'
    }
  ]
  
  const listComponent = (data) => {
    return data.map((item) => {
      return (
        `
        <li>
          <span>${ item.id }</span>
          <span>${ item.name }</span>
        </li>
        `
      )
    }).join('')
  }
  
  const el = document.querySelector('[data-list]')
  
  el.innerHTML = listComponent(data)