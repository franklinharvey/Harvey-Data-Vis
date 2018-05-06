import pandas as pd

def makeDataframe(df, cols):
    counts = [['', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    for index, row in df.iterrows():
        if counts[0][0] == '':
            counts[0][0] = row[0]
        if not pd.isnull(row['WiFi Router:Check all the internet connected devices you currently own:']):
            counts[0][1] += 1
        if not pd.isnull(row['Laptop computer:Check all the internet connected devices you currently own:']):
            counts[0][2] +=1
        if not pd.isnull(row['Smart phone:Check all the internet connected devices you currently own:']):
            counts[0][3] += 1
        if not pd.isnull(row['Smart TV:Check all the internet connected devices you currently own:']):
            counts[0][4] += 1
        if not pd.isnull(row['Activity Tracker (ex: Fitbit or Apple Watch):Check all the internet connected devices you currently own:']):
            counts[0][5] += 1
        if not pd.isnull(row['Smarthome Hub (ex. Amazon Echo, Google Alexa):Check all the internet connected devices you currently own:']):
            counts[0][6] += 1
        if not pd.isnull(row['Car that connects to the internet:Check all the internet connected devices you currently own:']):
            counts[0][7] += 1
        if not pd.isnull(row['Smart Thermostat (ex: Nest):Check all the internet connected devices you currently own:']):
            counts[0][8] += 1
        if not pd.isnull(row['Smart Appliance (ex. Coffeemaker, Refrigerator, Oven, Fridge):Check all the internet connected devices you currently own:']):
            counts[0][9] +=1
        if not pd.isnull(row['Smart Door Locks (ex. Door locks for your home you can open via bluetooth):Check all the internet connected devices you currently own:']):
            counts[0][10] += 1
        if not pd.isnull(row['Smart Lighting (ex. Connected lighting switches, dimmers, or bulbs):Check all the internet connected devices you currently own:']):
            counts[0][11] += 1
        counts[0][12] += 1
    returnCols = ["whototrust", "electronic", "percentage"]
    returndf = pd.DataFrame(columns=returnCols)
    for i in range(1,12):
        counts[0][i] = (counts[0][i]/counts[0][12]) * 100
        tempdf = pd.DataFrame([[counts[0][0], cols[i], counts[0][i]]], columns=returnCols)
        returndf = returndf.append(tempdf, ignore_index=True)
    return returndf



def main():
    # Original .csv did not like single quotes, this quick
    # section fixes that
    newFile = open("UpdatedData.csv", "w+")
    with open("20171013111831-SurveyExport.csv") as f:
        for line in f:
            newFile.write(line.replace('‰Ûª', "'"))
    newFile.close()

    df = pd.read_csv('UpdatedData.csv', encoding='latin-1')

    df = df[['Who do you most trust to help you learn how to protect your safety, security and privacy online?',
               'WiFi Router:Check all the internet connected devices you currently own:',
               'Laptop computer:Check all the internet connected devices you currently own:',
               'Smart phone:Check all the internet connected devices you currently own:',
               'Smart TV:Check all the internet connected devices you currently own:',
               'Activity Tracker (ex: Fitbit or Apple Watch):Check all the internet connected devices you currently own:',
               'Smarthome Hub (ex. Amazon Echo, Google Alexa):Check all the internet connected devices you currently own:',
               'Car that connects to the internet:Check all the internet connected devices you currently own:',
               'Smart Thermostat (ex: Nest):Check all the internet connected devices you currently own:',
               'Smart Appliance (ex. Coffeemaker, Refrigerator, Oven, Fridge):Check all the internet connected devices you currently own:',
               'Smart Door Locks (ex. Door locks for your home you can open via bluetooth):Check all the internet connected devices you currently own:',
               'Smart Lighting (ex. Connected lighting switches, dimmers, or bulbs):Check all the internet connected devices you currently own:']]


    df1 = df.loc[df['Who do you most trust to help you learn how to protect your safety, security and privacy online?']
                 == 'The makers of connected devices and apps']

    df2 = df.loc[df['Who do you most trust to help you learn how to protect your safety, security and privacy online?']
                 == 'My friends and family']

    df3 = df.loc[df['Who do you most trust to help you learn how to protect your safety, security and privacy online?']
                 == 'Non-profit organizations like Mozilla and Consumer Reports']

    df4 = df.loc[df['Who do you most trust to help you learn how to protect your safety, security and privacy online?']
                 == 'The government']

    df5 = df.loc[df['Who do you most trust to help you learn how to protect your safety, security and privacy online?']
                 == 'The media']

    df6 = df.loc[df['Who do you most trust to help you learn how to protect your safety, security and privacy online?']
                 == "I just don't know who to trust"]
    count = 0
    cols = ["response", "wifi", "laptop", "phone", "tv", "activitytracker", "homehub", "car", "thermostat", "appliance", "doorlocks", "lighting", "total"]
    d3df = pd.DataFrame(columns=["whototrust", "electronic", "percentage"])
#111
    d3df = d3df.append(makeDataframe(df1, cols), ignore_index=True)
    d3df = d3df.append(makeDataframe(df2, cols), ignore_index=True)
    d3df = d3df.append(makeDataframe(df3, cols), ignore_index=True)
    d3df = d3df.append(makeDataframe(df4, cols), ignore_index=True)
    d3df = d3df.append(makeDataframe(df5, cols), ignore_index=True)
    d3df = d3df.append(makeDataframe(df6, cols), ignore_index=True)


    d3df.to_csv("project3_vis2_data.csv", float_format='%.1f')

if __name__ == "__main__":
    main()
