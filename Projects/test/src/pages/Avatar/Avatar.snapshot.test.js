import React from 'react';
import Avatar from './Avatar.component';
import createComponentWithIntl from 'services/i18n/create-component-with-intl';

describe('The page component', () => {
  it('should render correctly', () => {
    const props = {
      intl: {
        formatMessage: jest.fn(),
      },
      fetchUser: jest.fn(),
      updateUserId: jest.fn(),
    };
    const tree = createComponentWithIntl(<Avatar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
