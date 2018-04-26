# create /var/log/.history/
HISTDIR=/var/log/.history
if [ ! -d $HISTDIR ]
  then
  mkdir -p $HISTDIR
  chmod 777 $HISTDIR
fi


# update /etc/profile
if [ ! -f /etc/profile.bak ]
  then
  mv /etc/profile /etc/profile.bak
  cat /etc/profile.bak ops_history.txt > /etc/profile
else
  echo "/etc/profile.bak exists! you may has already run it."
fi

