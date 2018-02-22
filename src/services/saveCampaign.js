import { SaveCampaign as CampaignSave } from './api'
import FetchError from './FetchError'

import { preapaeCampaignToApi } from '../utilities/normalizers'
export const SaveCampaign = async campaign => {
  const { id, ...campaignToSave } = preapaeCampaignToApi(campaign)
  try {
    const response = await CampaignSave(id, campaignToSave)
    return response
  } catch (error) {
    const code = id ? 'CS02' : 'CS01'
    throw new FetchError(code, '[CAMPAIGN]: Error Saving Campaign', error)
  }
}
