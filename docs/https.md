## HTTPS 설정

### 1. mkcert 설치

참고: [mkcert](https://mkcert.dev/)

```shell
brew install mkcert
# 윈도우는.. 알아서..
```

### 2. 로컬 인증서 생성

```shell
mkcert -install
mkcert local-apply.mju-likelion.com "*.mju-likelion.com" localhost 127.0.0.1 ::1
mkdir cert
mv *key.pem cert/cert.key
mv *.pem cert/cert.pem
```

### 3. hosts 파일 수정

```shell
sudo vi /etc/hosts
```

아래처럼 추가하시면 됩니다.

```text
...

0.0.0.0         local-apply.mju-likelion.com
```

### 3. https 로 서버 실행

```shell
yarn start:https
```
