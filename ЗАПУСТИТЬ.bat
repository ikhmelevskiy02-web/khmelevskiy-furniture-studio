@echo off
chcp 65001 >nul
echo Запуск сайта Khmelevskiy Furniture Studio...
pushd "%~dp0"
node serve.cjs
popd
pause
