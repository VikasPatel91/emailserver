import email_temp from "../Model/model.js";

export const Temp_add = async (req, res) => {
  const { templateName, imageUrl, logoUrl, description } = req.body;

  try {
    const email = new email_temp({
      templateName,
      imageUrl: req.files.imageUrl[0].filename,
      logoUrl: req.files.logoUrl[0].filename,
      description,
    });
    await email.save();
    res.status(201).json({ message: "Movie uploaded successfully", email });
  } catch (error) {
    res.status(500).json({ message: "Error uploading movie", error });
  }
};

export const get_template = async (req, res) => {
  try {
    const emails = await email_temp.find();
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: "Error fetching email", error });
  }
};
