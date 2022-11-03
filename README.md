# Todo List (React)

<h3>요약</h3>
<p>해야할 일을 적고 완료하면 체크하여 분리할 수 있는 Todo List (다크모드 포함)</p>

<img src="https://user-images.githubusercontent.com/71006256/199648833-251dcb06-82f4-465d-8a8a-6694249949e5.png" width="350" height="400"/>


<br>
<h3>기능</h3>
<ul> 
  <li>
    <p>초기화면</p>
    <img src="https://user-images.githubusercontent.com/71006256/199648739-81f25c3d-2dc8-4b71-9f5c-245a0611b507.png" width="450" height="400"/>
  </li>
  <li>
    <p>할일 추가</p>
    <img src="https://user-images.githubusercontent.com/71006256/199648741-2565baf5-d802-4247-a576-c65e2cc58aed.png" width="350" height="400"/>
    <img src="https://user-images.githubusercontent.com/71006256/199648742-b4362bbc-22ea-4476-827e-0e88b4a8db67.png" width="350" height="400"/>
  </li>
  <li>
    <p>할일 삭제</p>
    <img src="https://user-images.githubusercontent.com/71006256/199648744-e99c5f50-a36b-41a3-8d0e-4f4a90afa116.png" width="340" height="90"/>
  </li>
  <li>
    <p>완료시 체크</p>
    <img src="https://user-images.githubusercontent.com/71006256/199648745-5c6775e7-1a6d-4954-b024-2b6302525f41.png" width="350" height="200"/>
  </li>
  <li>
    <p>체크시 분리</p>
    <img src="https://user-images.githubusercontent.com/71006256/199648749-b94a19a5-826e-4a49-966e-86dacc236695.png" width="350" height="150"/>
    <img src="https://user-images.githubusercontent.com/71006256/199648750-8bfec67f-79a5-4c80-a37d-6146a2a9418e.png" width="350" height="150"/>
  </li>
  <li>
    <p>다크 모드</p>
    <img src="https://user-images.githubusercontent.com/71006256/199648733-b87c0ae6-c708-4ff7-a61b-37a9abab371f.png" width="350" height="400"/>
  </li>
  <li>
    <p>LocalStorage에 저장</p>
    <pre>
      <code>
// 리스트 storage에 저장할 때
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

// 리스트 storage에서 읽어올 때
function readTodos() {
  return todos ? JSON.parse(todos) : [];
}
      </code>
    </pre>
  </li>
