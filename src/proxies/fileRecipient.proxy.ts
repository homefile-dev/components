import { proxy } from 'valtio'
import { AssociatedAccountI } from '../interfaces/shareHome/ShareHome.interface';


interface ShareWithI {
  recipients?: AssociatedAccountI[]
}

export const fileRecipientProxy = proxy<ShareWithI>({
  recipients: [],
})