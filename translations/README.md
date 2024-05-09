# Translation files

The included `.po` files contain strings for the Common Design Header and Footer user interface, in some (not all) of the UN official languages. These can be expanded upon as language requirements arise.

## Importing translations

Visit `/admin/config/regional/translate/import` and upload the file of your choice. Select all three configuration options when importing the file.

## Exporting translations

Visit `/admin/config/regional/translate/export` and download the file of your choice. Select all three configuration options when exporting your file.

## Creating translations

As an admin, visit `/admin/config/regional/translate`

When using the translation interface, you must load a page containing the string to be translated in the NON-original language at least once. So for instance if there's a new paragraph type to be translated, the process would be:

1. As admin, add the new paragraph type to an English node. This is because you cannot add new paragraphs to translations of pages. It must first be in the original.
2. As admin, navigate to the translation of the node, or create a new one. Save the node.
3. View the new translated node.
4. Now you can proceed to the translation admin UI (see URL path above).
5. Once all translations are complete, **export the PO file** and replace the one in this directory. It still must be imported into the environment of interest, but storing them in version control ensures that we don't lose them due to content wipes and the like.
