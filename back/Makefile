#################
#	DATABASE	#
#################

create_db:
	docker pull postgres
	docker run --name iam-database -e POSTGRES_USER=iamuser -e POSTGRES_PASSWORD=password -e POSTGRES_DB=iam -p 5432:5432 -d postgres

stop_db:
	docker stop iam-database

remove_db:
	docker rm iam-database






# ###############
#	PYTHON ENV	#
#################

create_env:
	pipenv --python 3.8

start_env:
	pipenv shell

remove_env:
	pipenv --rm






#############
#	DJANGO	#
#############

serve:
	python3 manage.py runserver
