import css from "styled-jsx/css";

export default function Email_login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 입력된 데이터를 가져옵니다.
    const name = document.getElementById("input1").value;
    const email = document.getElementById("input2").value;
    const password = document.getElementById("input3").value;
    const passwordConfirm = document.getElementById("input4").value;
  
    // 비밀번호 확인
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    // Django API endpoint로 POST 요청을 보냅니다.
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        name: name,
        email: email,
        password: password,
      });
  
      // 응답이 성공적으로 받아졌다면, Django URL로 이동합니다.
      if (response.status === 200) {
        history.push('127.0.0.1:8000/api/users/signup/');
      }
    } catch (error) {
      console.error(error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };
  return (
    <div className="emaillogin_container">
      <h1>회원가입</h1>
      <form className="emaillogin_form" onSubmit={handleSubmit}>
        <label htmlFor="input1">이름 :</label>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          className="emaillogin_input"
          id="input1"
        />
        <label htmlFor="input2"> 이메일:</label>

        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          className="emaillogin_input"
          id="input2"
        />
        <label htmlFor="input3">비밀번호 :</label>

        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          className="emaillogin_input"
          id="input3"
          minLength={8}
          maxLength={14}
        />
        <label htmlFor="input4">비밀번호 확인 :</label>

        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          className="emaillogin_input"
          id="input4"
          minLength={8}
          maxLength={14}
        />
        <button type="submit" className="emaillogin_button">
          회원가입
        </button>
      </form>
      <style jsx>{emaillogin}</style>
    </div>
  );
}


const emaillogin = css`
  @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .emaillogin_container {
    width: 600px;
    height: 100vh;
    background-color: pink;
    color: white;
    text-align: center;
    //중앙정렬
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .emaillogin_form {
    display: flex;
    flex-direction: column;
  }
  .emaillogin_input {
    width: 300px;
    margin: 0 auto;
    border: none;
    height: 50px;
    border-radius: 10px;
  }
  .emaillogin_button {
    width: 200px;
    margin: 0 auto;
    border: none;
    border-radius: 25px;
    height: 50px;
  }
`;
