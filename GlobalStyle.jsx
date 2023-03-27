import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
}
section{
  width: 27vw;
  height: 100vh;
  background-color: #2e2e2e;
  box-shadow: 0px 0px 6px 7px #2e2e2e;
}
h1 {
  color: #9e9e9e;
  font-size: 50px;
}
input{
  font-weight: 600;
  width: 20.9vw;
  border: #2e2e2e;
  color: white;
  background-color: #0e0e0e;
  font-size: 20px;
} 
ol{
  color: #9e9e9e;
  list-style: none;
}
nav{
  display: flex;
  justify-content: space-between;
}

div{
  display: flex;
  justify-content: space-between;
}
.b1{
  transition: 0.2s;
  font-weight: 500;
  font-size: 15px;
  color: #0e0e0e;
  background-color: #9e9e9e;
  width: 5vw;
  height: 5vh;
}
.b2{
  width: 4vw;
  background-color: #9e9e9e;
  color: #0e0e0e;
  font-weight: 500;
}

@media(max-width: 600px){
  body{
    background-color: #2e2e2e;
  }
  section{
  box-shadow: none;
 width: 100%;
  }
  input{
  width: 70vw;
  }
  .b1{
    background-color: #9e9e9e;
    width: 10vw;
    height: 6vh;
  }
  .b2{

  }
}
`;
