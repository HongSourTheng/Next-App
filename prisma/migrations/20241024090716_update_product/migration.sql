-- DropIndex
DROP INDEX `Product_name_key` ON `product`;

-- AlterTable
ALTER TABLE `product` ALTER COLUMN `price` DROP DEFAULT;
