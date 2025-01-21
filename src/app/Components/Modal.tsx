import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
interface ModalProps {
  onClose: () => void;
  onSubmit: (newReview: {
    name: string;
    description: string;
    date: string;
  }) => void;
}
const Modal: React.FC<ModalProps> = ({ onClose, onSubmit }) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!name || !description) {
      alert("Name and description are required.");
      return;
    }
    const newReview = {
      name,
      description,
      date: new Date().toISOString(),
    };
    console.log("Submitting review:", newReview);
    onSubmit(newReview);
    toast({
      description: "Your review has been submitted successfully.",
    });
    onClose();
  };
  return (
    <Dialog open onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-satoshiBold">Write a Review</DialogTitle>
          <DialogDescription className="font-satoshi">
            Please provide your name and feedback below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-satoshi">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Enter your name"
              className="col-span-3 font-satoshi"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right font-satoshi">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
              placeholder="Enter your review"
              className="col-span-3 font-satoshi"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="font-satoshi">
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={handleSubmit}
            className="font-satoshi"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
