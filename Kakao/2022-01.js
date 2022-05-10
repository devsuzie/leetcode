// id_list: 이용자의 ID가 담긴 문자열 배열
// report: 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
// k: 정지 기준이 되는 신고 횟수
// answer: 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 Return
function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const report_list = {};

  id_list.map(user => {
    report_list[user] = [];
  });

  // id_list = ['muzi', 'frodo']
  // report_list = {'muzi': [], 'frodo': []}

  report.map(user => {
    // need to split ('muzi frodo' to 'muzi' 'frodo')
    const [user_id, report_id] = user.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  // report_list = {'muzi': ['ryan'], 'frodo' ['con']}

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map(user => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
