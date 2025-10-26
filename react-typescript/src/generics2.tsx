// Data를 any 타입으로 하는 것이 아니라, Data = {name: string; age: number} 와 같이
// 특정 타입을 지정해서 보내주면, 그에 맞추어서 data의 타입을 Data로 한다.

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
}

type UserResponse = ApiResponse<{ name: string; age: number; }>;
type BlogResponse = ApiResponse<{ title: string; }>;

const response: UserResponse = {  
  data: {
    name: "janghun",
    age: 24
  },
  isError: false
}

const blogResponse: BlogResponse = {
  data: {
    title: "hello"
  },
  isError: true
}

// generics에 default type을 지정할 수도 있다
// 자동으로 Data엔 {status: number}객체 타입이 들어간다.
type User<Data = { status: number }> = {
  info: Data;
  isError: boolean;
}

const client: User = {
  info: {
    status: 300
  },
  isError: false
}

// default type 대신 다른 type을 제네릭으로 보낼 수 있다
const myClient: User<{ name: string }> = {
  info: {
    name: "janghun"
  },
  isError: true
}

function GenericsTwo() {

  console.log(response);
  console.log(blogResponse);
  console.log(client);
  console.log(myClient);

  return(
    <h2>Generics in object</h2>
  )
}

export default GenericsTwo;