// Omit을 이용하여 특정 key를 제외한 타입 생성 가능
// 아래에선 User타입에서 name key를 제외한 Guest 타입 생성

type User = {
    sessionId: string;
    name: string;
}

type Guest = Omit<User, "name">;

function Button() {

    return(
        <button>
            Click me!
        </button>    
    );
}

export default Button;