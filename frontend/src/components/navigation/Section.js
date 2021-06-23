import styled from 'styled-components';

const Section = styled.div`
  ${(props) => (props.activeTab ? '' : 'display:none')}
`;

export default Section;
