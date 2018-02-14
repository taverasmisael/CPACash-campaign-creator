import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import EmptyContainer from '../../HOCs/EmptyContainer'
import Rule from '../../components/Rule'
import DeleteButton from '../../components/DeleteButton'

const RuleShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  activeConditions: PropTypes.array.isRequired,
  activeOffers: PropTypes.array.isRequired
})

class RulesList extends PureComponent {
  state = {
    rulesKeys: []
  }
  static propTypes = {
    ...EmptyContainer.propTypes,
    conditions: PropTypes.any.isRequired,
    offersList: PropTypes.any.isRequired,
    rules: PropTypes.arrayOf(RuleShape).isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }
  static defaultProps = {
    rules: []
  }

  handleDelete = id => () => this.props.onDelete(id)
  hanndleChange = id => changes => this.props.onChange({ id, changes })
  renderRule = ({ id, activeOffers, activeConditions }) => (
    <ExpansionPanel key={id}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="title" paragraph gutterBottom>
          Rule {id.slice(0, 6)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Rule
          id={id}
          key={id}
          conditions={this.props.conditions}
          offersList={this.props.offersList}
          activeOffers={activeOffers}
          activeConditions={activeConditions}
          onDelete={this.handleDelete(id)}
          onChange={this.hanndleChange(id)}
        />
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <DeleteButton onClick={this.handleDelete(id)} variant="raised">Delete Rule</DeleteButton>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )

  render() {
    return <div style={{ backgroundColor: '#fff' }}>{this.props.rules.map(this.renderRule)}</div>
  }
}

export default EmptyContainer(RulesList)
