const aws = require("aws-sdk");
const ses = new AWS.ses();

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      //pull off items from stream
      const firstName = streamedItem.dynamodb.NewImage.firstName.S;
      const lastName = streamedItem.dynamodb.NewImage.lastName.S;
      const emailAddress = streamedItem.dynamodb.NewImage.lastName.S;
      const website = streamedItem.dynamodb.NewImage.website.S;
      const message = streamedItem.dynamodb.NewImage.message.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "[eddyvarela.com] - Contact Form Submission" },
            Body: {
              Text: {
                Data: `Hello, my name is ${firstName} ${lastName}. \n
                Message: ${message}.\n
                Website: ${website}
                You can reach me at ${emailAddress}.`,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
