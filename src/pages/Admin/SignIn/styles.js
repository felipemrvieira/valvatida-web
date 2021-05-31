import styled from 'styled-components';
import Logo from '../../../template/images/logo-preferencial.png';

export const Container = styled.div`
  .login {
    .bg-gradient-primary {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;

      .bg-login-image {
        background: url(${Logo});
        background-position: center;
        background-size: 70%;
        background-repeat: no-repeat;
        border-right: 1px solid #fbf5f5;
      }
    }
  }
`;
