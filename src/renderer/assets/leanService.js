import AV from 'leancloud-storage'
import {appId, appKey} from '../../../app_keys'

let leanService = {}
leanService.init = function () {
  AV.init({appId, appKey})
}

export default leanService
