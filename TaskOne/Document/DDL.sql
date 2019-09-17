CREATE TABLE [Customer](
	[Id] INT IDENTITY,
	[Name] VARCHAR(100),
	[Address] VARCHAR(100),
	CONSTRAINT [PK_Customer] PRIMARY KEY ([Id])
)

CREATE TABLE [Product] (
	[Id] INT IDENTITY,
	[Name] VARCHAR(100),
	[Price] MONEY,
	CONSTRAINT [PK_Product] PRIMARY KEY ([Id])
)

CREATE TABLE [Store] (
	[Id] INT IDENTITY,
	[Name] VARCHAR(100),
	[Address] VARCHAR(100)
	CONSTRAINT [PK_Store] PRIMARY KEY ([Id])
)

CREATE TABLE [Sales](
	[Id] INT IDENTITY,
	[ProductId] INT,
	[CustomerId] INT,
	[StoreId] INT,
	[DateSold] DATETIME,
	CONSTRAINT [FK_Sales_Product] FOREIGN KEY 
	([ProductId]) REFERENCES [Product]([Id]),
	CONSTRAINT [FK_Sales_Customer] FOREIGN KEY
	([CustomerId]) REFERENCES [Customer]([Id]),
	CONSTRAINT [FK_Sales_Store] FOREIGN KEY
	([StoreId]) REFERENCES [Store]([Id]),
	CONSTRAINT [PK_Sales] PRIMARY KEY ([Id])
)