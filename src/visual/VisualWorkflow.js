import _ from 'lodash';
import VisualGroup from './VisualGroup';

/** Class that provides graphical representation for the Group.
 * @private
 */
export default class VisualWorkflow extends VisualGroup {
  /**
   * Creates new Workflow visual representation. Accepts all options for
   * joint.shapes.dev.Model and Step and embeds padding values.
   */
  constructor(opts = {}) {
    super(_.defaultsDeep(opts, {
      attrs: {
        '.label': {
          text: `${opts.step.type} ${opts.step.name}`,
        },
      },
      type: 'VisualWorkflow',
      portsEnabled: !!(opts && opts.step && opts.step.parent),
    }));
  }

  _getLabel() {
    return `${this.step.type} ${this.step.name}`;
  }
}
