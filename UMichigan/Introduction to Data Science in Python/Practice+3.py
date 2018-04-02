pd.merge(products, invoices, how="outer", left_index=True, right_on="Product ID")

ans = (df.where(df["Quantity"]>0)
	.dropna()
	.rename(columns={"Weight":"Weight (oz.)"}))
#sol
print(df.drop(df[df['Quantity'] == 0].index).rename(columns={'Weight': 'Weight (oz.)'}))

ans = (df.groupby("Category")
	.apply(lambda df: sum(df["Weight (oz.)"]*df["Quantity"])))
#sol
print(df.groupby('Category').apply(lambda df,a,b: sum(df[a] * df[b]), 'Weight (oz.)', 'Quantity'))

s.astype('category',
	categories = ["Low","Medium","High"],
	ordered = True)

pd.cut(s, 3)
#sol
pd.cut(s, 3, labels=["Small", "Medium", "Large"])

Bikes.pivot_table(values=["Rating","Price"], index="Manufacturer", columns='Bike Type', aggfunc=np.mean)
#sol
pd.pivot_table(Bikes, index=["Manufacturer",'Bike Type'])