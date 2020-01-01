# 用来自动化修改npm 的版本号 major.minor,patch 大版本 小版本 补丁版本
#!/bin/env bash
npm version patch
git push