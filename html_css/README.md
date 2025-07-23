# html_css 교육내용

|항목|내용|
|:---|:---|
|장소 :| 휴먼IT교육센터(수원 성빈센트병원 앞)|
|강사 :| 박기태|
|기간 :| 2025-04-28 ~|

## DBMS : Oracle19c

|항목|내용|비고|
|:---|:---|:---|
|문자형|- CHAR(10) : **고정길이의 문자**|
||- VARCHAR2(10) : 가변길이의 문자(**BYTE 크기**)|
||- NVARCHAR2(10) : 가변길이의 문자(**문자 수**)|
|숫자형|NUMBER(P, S) : P는 소수점을 포함은 전체 길이, S는 소수점 이하 자리 길이|
|날짜형|DATE : YYYYMMDD HH24MDSS까지 나타냄|
||TIMESTAMP : 밀리초까지 나타냄|
|**형변환**|CAST : ex) |
|| SELECT CAST(7566 AS VARCHAR2(4))      AS number_to_char|
||  , CAST('1981-04-02' AS DATE)     AS char_to_date|
||  , CAST('2975' AS NUMBER(5))      AS char_to_number1|
||  , CAST('2975.45' AS NUMBER(5,1)) AS char_to_number2|
|| FROM dual|
|| TO_CHAR, TO_DATE, TO_NUMBER|

## html

[**기본 구조**](https://blog.naver.com/sung_mk1919/223869694466)

## Java

|타입|C언어|Java|비고|
|:---|---:|---:|:---|
|byte|1byte|1byte|-128 ~ 127|
|**char**|1byte|2byte|C : -128 ~ 127, Java : 0 ~ 65535|
|short|2byte|2byte|-32768 ~ 32767|
|int|4byte|4byte|-2147483648 ~ 2147483647|
|**long**|4byte|8byte|C : -2147483648 ~ 2147483647, Java : -9223372036854775808 ~ 9223372036854775807|
|long long|8byte|||
|float|4byte|4byte||
|double|8byte|8byte||
