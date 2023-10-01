#!/bin/bash
. ./scripts/colors.sh

WEB_PATH='/var/www'
DEPLOY_URL=''
DEPLOY_PATH=''

die() { echo "$*"; exit 2; }
killIfFail() { 
  if [ $1 -eq 1 ];
  then 
    exit 1;
  fi
}  
needs_arg() { if [ -z "$OPTARG" ]; then die "No arg for --$OPT option"; fi; }

get_result()
{
  if [ $1 -eq "0" ]
  then
    echo -e "${BGreen}Success${CO}\n"
  else
    echo -e "${BRed}Failed${CO}\n"
  fi
}

while getopts :-: OPT; 
do
  if [ "$OPT" = "-" ]; then  
    OPT="${OPTARG%%=*}"
    OPTARG="${OPTARG#$OPT}"
    OPTARG="${OPTARG#=}"
  fi
  case "$OPT" in
    deploy-url )  DEPLOY_URL=$OPTARG ;;
    ??* )          die "Illegal option --$OPT" ;;
    ? )            exit 2 ;;
  esac
done
shift $((OPTIND-1))

# ENV VARIABLES LOAD 

echo -e "${Cyan}Checking environment variables...${CO} \n"

if [ ! -z $DEPLOY_URL ]
then 
  echo -e "${Cyan}Using variables from arguments.${CO} \n"
else
  if [ -f .env ]
  then
    DEPLOY_URL=`cat .env | grep DEPLOY_URL | sed 's/^.*=//g'`
    if [ -z $DEPLOY_URL ]
    then
      echo -e "${BRed}WARNING:${CO} ${Red}Missing environment variable${CO}\n"
      echo -e "You need to define ${UCyan}PUBLIC_DEPLOY_URL${CO} variable in .env file.\n"
      exit 1;
    fi
    echo -e "${Cyan}Using variables from environment file${CO} \n"
  else
    echo -e "${BRed}WARNING:${CO} ${Red}Missing ${URed}.env${Red} file.${CO}\n"
    echo -e "Create ${UCyan}.env${CO} file from ${UCyan}.env.exmaple${CO} or you can supply ${BCyan}--deploy-url${CO} option.\n"
    exit 1;
  fi
fi

DEPLOY_PATH=$WEB_PATH/$DEPLOY_URL

# WEB PATH CHECK

if [ ! -d $WEB_PATH ]
then
  echo -e "${Cyan}Creating directory: ${UWhite}${WEB_PATH}${CO}"
  mkdir /var/www
  RESULT=$?
  get_result $RESULT
  killIfFail $RESULT
fi

# DEPLOY PATH CHECK 

if [ ! -d $DEPLOY_PATH ]
then
  mkdir $DEPLOY_PATH
  RESULT=$?
  echo -e "${Cyan}Creating directory: ${UWhite}${DEPLOY_PATH}${CO}"
  get_result $RESULT
  killIfFail $RESULT
else
  rm -rf $DEPLOY_PATH/*
  RESULT=$?
  echo -e "${Cyan}Erasing directory: ${UWhite}${DEPLOY_PATH}${CO}"
  get_result $RESULT
fi

# BUILDING APPLICATION 

echo -e "${BCyan}Building application: ${CO}"

pnpm run build

# COPYING BUILD FILES

cp -R ./build/* ${DEPLOY_PATH}
RESULT=$?
echo -e "\n${Cyan}Copying build files to: ${UWhite}${DEPLOY_PATH}${CO}"
get_result $RESULT
killIfFail $RESULT