import PropTypes from "prop-types";
import styled from "styled-components";

const Background = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="container">
        {children}
      </div>
    </StyledWrapper>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    min-height: 100vh; /* Ensure it covers the full viewport height */
    /* Add your background pattern here */
    background-color: #313131;
    background-image: radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
    background-size: 30px 30px;
    background-position: -5px -5px;
  }
`;

export default Background;