/**
 * @flow
 */
const regionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [
    // frame tag on html5 is deprecated
    {
      module: 'HTML',
      concept: {
        name: 'frame',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'section',
      },
    },
    {
      concept: {
        name: 'Device Independence Glossart perceivable unit',
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'section',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'landmark',
    ],
  ],
};

export default regionRole;
