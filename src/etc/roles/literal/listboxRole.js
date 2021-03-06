/**
 * @flow
 */
const listboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-multiselectable': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-orientation': 'vertical',
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'list',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'select',
      },
    },
    {
      module: 'XForms',
      concept: {
        name: 'select',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [
    [
      'option',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
      'select',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
    ],
  ],
};

export default listboxRole;