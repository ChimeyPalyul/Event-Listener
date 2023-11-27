#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from models import Account, Opportunity, Registration, db
from datetime import datetime, timedelta


# Remote library imports
from faker import Faker

# Local imports
from app import app

fake = Faker()

def create_accounts():
    accounts = []
    ROLES= ['Admin', 'User']
    for _ in range(30):
        a = Account(
            username= fake.first_name(),
            password='testpassword',
            name= fake.name(),
            email=fake.email(),
            role= rc(ROLES)    
        )
        accounts.append(a)
    return accounts

# # Create a new opportunity
def create_opportunities():
    opportunities = []
    for _ in range(10):
        o = Opportunity(
            title= fake.sentence(),
            description = fake.sentence(30),
            start_date = fake.date(),
            end_date = fake.date(),
                
        )
        opportunities.append(o)
    return opportunities
# opportunity1 = Opportunity(
#    title='Test Opportunity',
#    description='This is a test opportunity for testing purposes.',
#    start_date=datetime.utcnow(),
#    end_date=datetime.utcnow() + timedelta(days=7)
# )

# # Create a new registration
# registration1 = Registration(
#    account_id=account1.id,
#    opportunity_id=opportunity1.id
# )


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # delete current data
        #Account.query.delete()

        # create the database if not created
        db.create_all()
        # Seed code goes here!
        print("seeding accounts...")
        acc = create_accounts()
        opp = create_opportunities()
        db.session.add_all(acc)
        db.session.add_all(opp)
        db.session.commit()
        print("finished seeding accounts")

    # db.session.add(account1)
    # db.session.add(opportunity1)
    # db.session.add(registration1)

    #    # Commit the session to save the changes to the database
    # db.session.commit()