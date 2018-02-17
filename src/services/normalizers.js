import { normalize as normalizr } from 'normalizr'
import { flip, curry } from 'ramda'

import ConditionsSchema from './schemas/conditions'

const normalize = curry(flip(normalizr))
export const NormalizeConditions = normalize(ConditionsSchema)
export const NormalizeCampaign = normalize()
