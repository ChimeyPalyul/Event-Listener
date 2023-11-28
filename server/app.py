#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Account, Registration, Opportunity 

class Opportunities(Resource):
    def get(self):
        opportunities = [opportunity.to_dict() for opportunity in Opportunity.query.all()]
        return opportunities, 200
    
    def post(self):
        data = request.get_json()
        try:
            new_opportunity = Opportunity(
                title = data['title'],
                description = data["description"],
                start_date = data["start_date"],
                end_date = data["end_date"]
            )
            db.session.add(new_opportunity)
            db.session.commit()
            return new_opportunity.to_dict(only = ("title", "description", "start_date", "end_date")), 200
        except ValueError:
            return{
                "errors": ["validation errors"]
                }, 400

api.add_resource(Opportunities, "/events")

class OpportunityById(Resource):
        def patch(self, id):
            opportunity = Opportunity.query.filter_by(id=id).first()
            if not opportunity:
                return {
                "error": "Event not found"
                }, 404
            data = request.get_json()

            try:
                for key in data:
                    setattr(opportunity, key, data[key])
                db.session.add(opportunity)
                db.session.commit()
            except ValueError as e:
                print(e.__str__())
                return {
                "error": "validation errors"
                }, 400

            return opportunity.to_dict(only=("title", "description", "start_date", "end_date")), 200                

        def delete(self, id):
            opportunity = Opportunity.query.filter_by(id=id).first()
            if not opportunity:
                return {"error": "Event not found"}, 404
            
            db.session.delete(opportunity)
            db.session.commit()
            return "", 204

api.add_resource(OpportunityById, "/events/<int:id>")

class Accounts(Resource):
    def get(self):
        accounts = [account.to_dict() for account in Account.query.all()]
        return accounts, 200
    
    def post(self):
        data = request.get_json()
        try:
            new_account = Account(
                username = data["username"],
                password = data["password"],
                name = data["name"],
                email = data["email"],
                role = data["role"]
            )
            db.session.add(new_account)
            db.session.commit()
            return new_account.to_dict(), 201
        except Exception as e:
            print(e.__str__())
            return {
                "errors": ["validation errors"]
            }, 400
        

api.add_resource(Accounts, "/volunteers")

class Registrations(Resource):
    def get(self):
        registrations = [registration.to_dict() for registration in Registration.query.all()]
        return registrations, 200
    
    def post(self):
        data = request.get_json()
        try:
            new_registration= Registration(
                registration_date = data["registration_date"],
                account_id = data["account_id"],
                opportunity_id = data["opportunity_id"]
            )
            db.session.add(new_registration)
            db.session.commit()
            return new_registration.to_dict(), 201
        except ValueError as e:
            print (e.__str__())
            return {
                "errors": ["validation errors"]
            }, 400

api.add_resource(Registrations, "/registrations")

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

