import styled from 'styled-components'

import { FiUserX, FiUserCheck } from 'react-icons/fi'

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 0 5%;
  margin: 15px 0 0;
  width: 100%;
  z-index: 9;

  > a {
    min-width: 220px;
    width: 24%;
    margin: 0 0 10px;

    > h2 {
      font-size: 14px;
      font-weight: 500;
    }

    > span {
      display: block;
      background-color: #2980b9;
      height: 2px;
      max-width: 20px;
      margin: 5px 0 10px;
    }

    > .card {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: #fff;
      border-radius: 0 20px 20px 20px;
      box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
      padding: 20px 15px;
    }
  }
`

export const UserDeath = styled(FiUserX)`
  font-size: 35px;
`

export const UserConfirm = styled(FiUserCheck)`
  font-size: 35px;
`
