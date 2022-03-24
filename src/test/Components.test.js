import {
  render,
} from '@testing-library/react';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('test snapshot for components', () => {
  test('Create a Home snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment(<Home />)).toMatchSnapshot();
  });
  test('Create a Caculator snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment(<Calculator />)).toMatchSnapshot();
  });
  test('Create a Quote snapshot', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment(<Quote />)).toMatchSnapshot();
  });
});
