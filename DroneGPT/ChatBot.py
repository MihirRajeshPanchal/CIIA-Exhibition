import re
from STT import *
from TTS import *
import sys
import long_responses as long


def message_probability(user_message, recognised_words, single_response=False, required_words=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognised_words:
            message_certainty += 1

    percentage = float(message_certainty) / float(len(recognised_words))

    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0


def check_all_messages(message):
    highest_prob_list = {}

    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob_list
        highest_prob_list[bot_response] = message_probability(message, list_of_words, single_response, required_words)

    # General Responses -------------------------------------------------------------------------------------------------------
    response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo',"hai"], single_response=True)
    response('See you!', ['bye', 'goodbye'], single_response=True)
    response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], required_words=['how'])
    response('You\'re welcome!', ['thank', 'thanks'], single_response=True)
    response('Thank you!', ['i', 'love','like','admire'], required_words=['agrodrone','love'or'admire'or'like'])

    # Longer responses servicess tab of website
    response('I am a DroneGPT', ['who', 'are','you'], single_response=True,required_words=['who'])
    response('Bringing precision to the field, one flight at a time.', ['tagline'], single_response=True)
    response('AgroDrone is a unmanned aerial vehicles (UAVs) used to collect data and perform various tasks related to crop management and farming operations. These drones are equipped with a variety of sensors and cameras that can be used to gather information on crop health, soil moisture levels, and crop yields', ['what is agrodrone'], single_response=True)
    response('Fly the Drone and then Compute the video are the two steps to follow to use the drone', ['steps','drone'], single_response=True)
    response('95% Accuracy on computation of diseases found in crops through video capture',['accuracy','computation'],single_response=True)
    response('16% Demand increase over the years from farmers',['demand','increase','drone'],single_response=True)
    response('45% Increase in growth in yield of the farm',['increase','yield'],single_response=True)
    response('26% Usage Increase of drones in field of ariculture',['usage','increase'],single_response=True)
    response('Our team specializes in the development and implementation of agricultural drones for precision farming. Our drones are equipped with state-of-the-art technology such as multi-spectral cameras and precision spraying systems, allowing for efficient and precise crop monitoring and maintenance. Our team consists of experts in fields such as drone engineering, precision agriculture, and computer vision, ensuring that our drones are at the forefront of technological advancements in the industry.',['our','team'],single_response=True)
    
    # team members
    response('Mihir Panchal is a Information Technology Student at Shri Bhagubhai Mafatlal Polytechnic',['mihir','panchal'],single_response=True)
    response('Prinkal Doshi is a Information Technology Student at Shri Bhagubhai Mafatlal Polytechnic',['prinkal','doshi'],single_response=True)
    response('Tejas Pandya is a Electrical Engineering Student at Shri Bhagubhai Mafatlal Polytechnic',['tejas','pandya'],single_response=True)
    response('Vedant Kambli is pursuing BTech in AI/ML at Dwarkadas J. Sanghvi College of Engineering',['vedant','kambli'],single_response=True)
    response('Chaitya Gala is a Electrical Engineering Student at Shri Bhagubhai Mafatlal Polytechnic',['chaeitya','gala'],single_response=True)
    response('Ratan Kunwar is a Electrical Engineering Student at Shri Bhagubhai Mafatlal Polytechnic',['ratan','kunwar'],single_response=True)
     
    #contact page
    response('Contact us at pandyatejas100@gmail.com',['contact','information','how','should','I','agrodrone'],single_response=True,required_words=['contact'])
    
    best_match = max(highest_prob_list, key=highest_prob_list.get)

    return long.unknown(message) if highest_prob_list[best_match] < 1 else best_match

def get_response(user_input):
    split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())
    response = check_all_messages(split_message)
    return response

def dronegpt():
    tts("Hello I am DroneGPT")
    ans=get_response(stt())
    tts(ans)
    
# dronegpt()