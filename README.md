# KOOTED

## Introduction
[ Wanted 사이트](https://www.wanted.co.kr/newintro) 클론 프로젝트<br>
카테고리별 채용 공고를 확인하고, 이력서를 작성하여 원하는 회사에 지원할 수 있는 사이트
- 기간: 2021. 10. 18. ~ 2021. 10. 29.
- [Backend GitHub](https://github.com/wecode-bootcamp-korea/25-2nd-KOOTED-backend)
- [프로젝트 시연 영상](https://www.youtube.com/watch?v=IAU3L0hZchE&t=2s)
- Wanted 사이트의 기획과 디자인을 제외한 모든 기능과 데이터는 직접 구현하였습니다.
- 초기 세팅부터 직접 구현하였으며, 모든 데이터는 프론트와 백의 통신으로 받아온 데이터입니다.

## Members
- **Frontend**: 정민지, 박미연, 서동혁, 홍승균
- **Backend**: 구본욱, 김민호


## Technology
- **Frontend**: `JSX` `React(CRA)`, `React Hook`, `Sass` (Library: `React-router-DOM`)
- **Backend**: `Python`, `Django Web Framework`, `AWS`, `MySQL`, `JWT`
- **Common**: 버전관리 `Git & GitHub`, 소통 `Slack`, 일정관리 [Trello](https://trello.com/b/7H4voa32/kooted)

## Main Function
- **메인 페이지**: 메인 레이아웃, 로그인/로그아웃 여부에 따른 Nav 레이아웃 변경
- **소셜 로그인**: 카카오API를 이용한 소셜 로그인/로그아웃 기능
- **회원 정보 입력**: 회원 전문 분야 설정 기능, 직장 및 연봉정보 입력 기능
- **채용 공고 리스트**: 카테고리별 채용 공고 확인, 최신순/인기순/보상금순 정렬 기능, 해쉬태그별 필터링 기능
- **직군별 연봉 그래프**: 직군별 평균 연봉 확인 및 연차별 평균 연봉 시각적으로 확인 가능
- **채용 공고 상세**: 공고 제목/카테고리/공고 내용 확인, 지도(카카오 API)를 통한 회사 위치 확인, 공고 북마크 기능, 해당 공고에 이력서 지원하기 기능
- **이력서 작성**: 새 이력서 추가 및 삭제 기능(자기소개, 경력, 학력, 스킬), 기존 이력서 수정 기능, 작성한 이력서 리스트 확인 기능
- **마이페이지**: 회원 정보 확인 기능, 채용 공고 지원 현황 확인 기능, 북마크한 공고 확인 및 해당 공고 상세 페이지 이동 기능

## Part
- 정민지: 메인 페이지, 이력서 작성, 마이페이지
- 박미연: 채용 공고 리스트, 직군별 연봉 그래프
- 서동혁: 채용 공고 상세, 지도 API
- 홍승균: 소셜 로그인, 회원 정보 입력

## Demo
![image](https://user-images.githubusercontent.com/20683436/139555593-a33905fb-368e-4fba-88ba-532795b9828c.png)
