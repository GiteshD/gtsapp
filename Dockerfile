FROM alpine


RUN pwd
RUN cd /home
RUN pwd
WORKDIR /home
RUN pwd

CMD ["echo", "Hello Docker"]
CMD ["echo", "Hello Docker3"]
ENTRYPOINT ["pwd"]
