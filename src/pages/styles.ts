import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  overflow: hidden;
  position: relative;

  > .covidLogoTop {
    position: absolute;
    top: -100px;
    right: -100px;
    opacity: 0.2;
    max-width: 400px;
  }

  > .covidLogoBottom {
    position: absolute;
    bottom: -100px;
    left: -100px;
    opacity: 0.2;
    max-width: 350px;
  }


  > h1 {
    font-size: 30px;
    text-transform: uppercase;
    z-index: 9;
  }
  > .main {
    width: 100%;
    max-width: 966px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
  }

`
