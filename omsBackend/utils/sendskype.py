# -*- coding: utf-8 -*-
# author: itimor

from skpy import Skype

sk_user = 'tbkiven@outlook.com'
sk_pass = 'tengfa9188'
sk_group = 'chat group'
sk_touser = 'larry'
content = "hello"

sk = Skype(sk_user, sk_pass)


def skype_bot(to_user, content):
    for c in sk.chats.recent():
        if to_user in c:
            chat = sk.chats[c]
            chat.sendMsg(content)

if __name__ == '__main__':
    for chatId in sk.chats.recent():
        print(chatId)
