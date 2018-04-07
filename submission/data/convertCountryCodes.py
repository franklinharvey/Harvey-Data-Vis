import csv

def main():
    with open('tech_savviness/avg_savviness.csv', 'r') as dataRef:
        dataReader = csv.reader(dataRef)
        with open('countries_codes.csv', 'r') as countryRef:
            codeReader = csv.reader(countryRef)
            codes = []
            data = []
            for line in codeReader:
                codes.append(line)
            for line in dataReader:
                data.append(line)
            for i,dataEntry in enumerate(data):
                for j,refEntry in enumerate(codes):
                    if data[i][0] == codes[j][0]:
                        # print (str(data[i]) + " " + str(codes[j]))
                        data[i].append(codes[j][1])
                        # break
            for i,dataEntry in enumerate(data):
                if i == 0:
                    data[i] = ["country","avg","code"]
                elif len(data[i]) < 3:
                    del data[i]
                elif len(data[i][1]) < 2:
                    del data[i]

            with open("output.csv", "w") as f:
                writer = csv.writer(f)
                writer.writerows(data)


if __name__ == '__main__':
    main()
