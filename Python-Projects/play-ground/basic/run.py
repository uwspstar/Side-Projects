print("how may kms did you run?")
kms = input()
miles = float(kms) / 1.60934
miles = round(miles, 2)  # round the result
print(f"you run {kms} kms , around {miles} ml")
