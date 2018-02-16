import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import RulesList from '../../lists/RulesList'

const RulesContainer = ({ rules, offersList, conditions, onDelete, onCreate, onChange }) => (
  <Container
    title=""
    createText="Add Rule"
    ListComponent={RulesList}
    listProps={{
      emptyMessage: 'There are no rules. Please add a rule using the button down below. Default Rule will be used',
      isEmpty: !rules.length,
      rules,
      offersList,
      conditions,
      onChange,
      onDelete
    }}
    onCreate={onCreate}
  />
)

const RuleShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  activeConditions: PropTypes.array.isRequired,
  activeOffers: PropTypes.array.isRequired
})

RulesContainer.propTypes = {
  rules: PropTypes.arrayOf(RuleShape).isRequired,
  offersList: PropTypes.any.isRequired,
  conditions: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default RulesContainer
