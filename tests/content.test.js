import {test} from 'node:test';
import assert from 'node:assert/strict';
import {compose,initials,vowels,finals,quiz,programs} from '../src/content.js';
test('현대 한글 전체 11172 음절이 유니코드 순서대로 조합된다',()=>{assert.equal(initials.length,19);assert.equal(vowels.length,21);assert.equal(finals.length,28);for(let i=0;i<19;i++)for(let v=0;v<21;v++)for(let f=0;f<28;f++)assert.equal(compose(i,v,f).codePointAt(0),0xac00+(i*21+v)*28+f)});
test('미션 정답 한·글을 실제 자모 선택으로 만들 수 있다',()=>{const build=(a,b,c)=>compose(initials.indexOf(a),vowels.indexOf(b),finals.indexOf(c));assert.equal(build('ㅎ','ㅏ','ㄴ'),'한');assert.equal(build('ㄱ','ㅡ','ㄹ'),'글')});
test('모든 퀴즈에 유효한 정답과 해설이 있고 프로그램 ID는 고유하다',()=>{assert.equal(quiz.length,5);for(const q of quiz){assert.ok(q.options[q.answer]);assert.ok(q.explanation.length>20);assert.equal(new Set(q.options).size,q.options.length)}assert.equal(new Set(programs.map(p=>p.id)).size,programs.length)});
