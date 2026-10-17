export const programs = [{id:'pdf',title:'PDF 글자 수 세기',category:'문서 · 도구',description:'파일은 내 컴퓨터 안에. PDF의 글자 수와 페이지별 결과를 확인하세요.',duration:'로컬 처리',status:'지금 사용 가능'},{ id: 'hangeul', title: '한글날 배움터', category: '국어 · 한글', description: '1443년에서 오늘까지. 사라진 한글의 단서를 따라 시간여행을 떠나세요.', duration: '약 10–15분', status: '지금 체험 가능' }];
export const quiz = [
 {question:'시간여행을 마칠 준비가 됐나요? 빈칸에 들어갈 말은? “내일 다시 만나도 __?”',options:['되','돼'],answer:1,explanation:'“되어”로 바꾸어 자연스러우면 “돼”를 씁니다. “만나도 되어?”가 자연스러우므로 “돼”가 맞습니다.'},
 {question:'여행 기록을 남기려 합니다. 바른 표현을 골라 보세요.',options:['며칠 동안의 여행','몇일 동안의 여행'],answer:0,explanation:'날짜나 날의 수를 뜻하는 말은 “며칠”로 적습니다. “몇일”은 바른 표기가 아닙니다.'},
 {question:'훈민정음 반포 소식을 들었습니다. 바른 표현은?',options:['왠지 기분이 좋다','웬지 기분이 좋다'],answer:0,explanation:'“왜인지”가 줄어든 말은 “왠지”입니다. “웬”은 “웬 사람”처럼 어찌 된, 어떠한 뜻으로 쓰입니다.'},
 {question:'길을 잃은 동료가 묻습니다. “이제 __ 하지?”',options:['어떡해','어떻게'],answer:1,explanation:'“어떻게”는 뒤의 동작 “하지”를 꾸밉니다. “어떡해”는 “어떻게 해”가 줄어든 말로, “이제 어떡해?”처럼 씁니다.'},
 {question:'미래의 친구에게 인사합니다. 바른 표현은?',options:['다음에 또 만날게','다음에 또 만날께'],answer:0,explanation:'약속이나 의지를 나타내는 어미는 “-ㄹ게”로 적습니다. 소리가 된소리로 나더라도 “만날게”가 맞습니다.'}
];
export const initials = [...'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'];
export const vowels = [...'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'];
export const finals = ['', ...'ㄱㄲ', 'ㄳ', ...'ㄴ', 'ㄵ', 'ㄶ', ...'ㄷㄹ', 'ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ', ...'ㅁㅂ','ㅄ', ...'ㅅㅆㅇㅈㅊㅋㅌㅍㅎ'];
export function compose(initial, vowel, final) { return String.fromCharCode(0xac00 + (initial * 21 + vowel) * 28 + final); }
export const targets = ['한','글'];


