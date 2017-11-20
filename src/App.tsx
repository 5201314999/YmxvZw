import * as React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className="app__header">
          <div className="app__title">title</div>
          <div className="app__actions">
            <div className="tabs">
              <div className="tabs__item">Blog</div>
              <div className="tabs__item">Contact</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
