import { Router } from "express";
import { alldata, studentByAdmissionYear, studentByBranch, studentByCurrentYear, studentByDuration, studentByFilters, studentByGender } from "../controllers/studentsDetails.controller.js";

const router = Router();

router.get("/",alldata);

router.get("/gender/:gender",studentByGender);
router.get("/branch/:branch",studentByBranch);
router.get("/currentyear/:currentYear",studentByCurrentYear);
router.get("/duration/:duration",studentByDuration);
router.get("/admissionyear/:admissionYear",studentByAdmissionYear);

router.get("/filter",studentByFilters);

export default router;