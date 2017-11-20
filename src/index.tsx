import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'

import App from './App'

declare const require: any

const {default: registerServiceWorker} = require('./registerServiceWorker')

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
