import styled from 'styled-components'

export default styled.h1`
  background-color: ${prop => (prop.color ? prop.color : 'black')} ; 
  border: ${prop => prop.noBorder ? '0' : '1px solid red'};

  &:hover {
      background-color: black;
  }

  ${prop => {
        if (prop.green) {
            return `
          background-color: green;
          `
        }

    }}
  ${prop => {
        switch (prop.size) {
            case 'small':
                return 'font-size: 16px;'
            case 'large':
                return 'font-size: 24px;'
            default:
                return 'font-size: 36px;'
        }
    }}
`;